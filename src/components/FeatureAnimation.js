import React, { useState, useEffect, useRef } from 'react';
import './FeatureAnimation.css';

export default function FeatureAnimation({ activeFeature }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState(0);
  const [pulseNodes, setPulseNodes] = useState({});
  const animationRef = useRef(null);
  
  // Define nodes based on the three main features
  const nodes = {
    work: [
      { id: 0, title: "Verified Work", icon: "✓", description: "Proof of contribution" },
      { id: 1, title: "Skills", icon: "🛠️", description: "Skill validation system" },
      { id: 2, title: "X Rating™", icon: "⭐", description: "True reputation score" },
      { id: 3, title: "Network", icon: "🌐", description: "Professional connections" },
      { id: 4, title: "Portfolio", icon: "📊", description: "Work showcase" },
      { id: 5, title: "Verification", icon: "🔍", description: "Skill authenticity" },
    ],
    bank: [
      { id: 0, title: "Proposals", icon: "📝", description: "Community initiatives" },
      { id: 1, title: "Governance", icon: "🏛️", description: "Decentralized control" },
      { id: 2, title: "Voting", icon: "🗳️", description: "Feature decisions" },
      { id: 3, title: "Treasury", icon: "💰", description: "Fund allocation" },
      { id: 4, title: "Ownership", icon: "🔑", description: "Community stake" },
      { id: 5, title: "Direction", icon: "🧭", description: "Platform evolution" },
    ],
    play: [
      { id: 0, title: "Projects", icon: "📋", description: "Collaborative work" },
      { id: 1, title: "Rewards", icon: "🏆", description: "Contribution incentives" },
      { id: 2, title: "Teams", icon: "👥", description: "Skill matching" },
      { id: 3, title: "Growth", icon: "📈", description: "Skill progression" },
      { id: 4, title: "Network", icon: "🌐", description: "Professional connections" },
      { id: 5, title: "Challenges", icon: "🎯", description: "Skill-based tasks" },
    ]
  };

  // Get current nodes based on active feature
  const currentNodes = nodes[activeFeature] || nodes.work;

  // Create random pulse effect on nodes
  useEffect(() => {
    const pulseTiming = setInterval(() => {
      const randomNodeId = Math.floor(Math.random() * currentNodes.length);
      if (randomNodeId !== activeNode && randomNodeId !== hoveredNode) {
        setPulseNodes(prev => ({
          ...prev,
          [randomNodeId]: true
        }));
        
        setTimeout(() => {
          setPulseNodes(prev => ({
            ...prev,
            [randomNodeId]: false
          }));
        }, 1000);
      }
    }, 2500);
    
    return () => clearInterval(pulseTiming);
  }, [currentNodes, activeNode, hoveredNode]);

  // Auto animate through nodes for the active feature
  useEffect(() => {
    setActiveNode(0); // Reset active node when feature changes
    
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % currentNodes.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [activeFeature, currentNodes.length]);

  // Define color schemes for different features
  const featureColors = {
    work: {
      primary: '#4f46e5', // Indigo
      secondary: '#8b5cf6', // Purple
      bgGradient: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(139, 92, 246, 0.1))'
    },
    bank: {
      primary: '#0891b2', // Cyan
      secondary: '#2563eb', // Blue
      bgGradient: 'linear-gradient(135deg, rgba(8, 145, 178, 0.05), rgba(37, 99, 235, 0.1))'
    },
    play: {
      primary: '#059669', // Emerald 
      secondary: '#3b82f6', // Blue
      bgGradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05), rgba(59, 130, 246, 0.1))'
    }
  };

  // Get current color scheme
  const colors = featureColors[activeFeature] || featureColors.work;

  // Effect to update background gradient
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.style.background = colors.bgGradient;
    }
  }, [colors.bgGradient]);

  // Function to determine if a node is active in the flow
  const isNodeActive = (nodeId) => {
    return nodeId === activeNode || nodeId === hoveredNode;
  };

  // Additional info cards for specific nodes
  const featureInfoCards = {
    work: {
      2: { // X Rating node
        title: "The X Rating™",
        description: "Reputation shouldn't be a number you buy or a testimonial you chase. The X Rating™ is your verified reputation score on brdg — built through what you actually do.",
        details: [
          "Evolves with every project, collaboration and delivery",
          "Shows your consistency, impact and value",
          "No inflated stars or fake reviews — just verified contribution"
        ]
      },
      5: { // Verification node
        title: "Skill Verification",
        description: "Never claim skills. Prove them through actual work and have them authenticated by the community.",
        details: [
          "Skills verified through completed projects",
          "Peer validation from qualified reviewers",
          "Progressive skill leveling based on demonstrated expertise"
        ]
      }
    },
    bank: {
      1: { // Governance node
        title: "Governance. Ownership. Direction.",
        description: "brdg is governed through a decentralised model where every core upgrade, system rule and directional shift is driven by user input.",
        details: [
          "Contribute to proposals for platform improvements",
          "Vote on feature rollouts and system updates",
          "Participate in allocation of funding and rewards",
          "Be a builder of the structure — not just a user of the surface"
        ]
      },
      4: { // Ownership node
        title: "Community Ownership",
        description: "This isn't a platform you follow. It's infrastructure you help shape.",
        details: [
          "Earn ownership through contribution",
          "Direct influence on platform development",
          "Shared benefits from platform growth"
        ]
      }
    },
    play: {
      0: { // Projects node
        title: "Collaborative Projects",
        description: "Join forces with verified talent to build meaningful solutions while growing your skills and reputation.",
        details: [
          "Skill-matched team formation",
          "Collaborative workflows",
          "Fair contribution recognition"
        ]
      },
      3: { // Growth node
        title: "Skill Progression System",
        description: "Watch your skills evolve through real-world application, not theoretical tests.",
        details: [
          "Practical skill advancement",
          "Verifiable growth tracking",
          "Expertise benchmarking"
        ]
      }
    }
  };

  // Get info card for current feature and hovered node
  const getInfoCard = () => {
    if (!hoveredNode && hoveredNode !== 0) return null;
    
    const featureCards = featureInfoCards[activeFeature];
    if (!featureCards) return null;
    
    return featureCards[hoveredNode];
  };

  const infoCard = getInfoCard();

  // Calculate position for flowing particles
  const getFlowPosition = () => {
    // Calculate position based on active node
    return (activeNode / (currentNodes.length - 1)) * 100;
  };

  return (
    <div className="feature-animation-container" ref={animationRef}>
      <div className="feature-title">
        {activeFeature === 'work' && <h2>WORK</h2>}
        {activeFeature === 'bank' && <h2>BANK</h2>}
        {activeFeature === 'play' && <h2>PLAY</h2>}
      </div>
      
      {/* Node Connection Graph */}
      <div className="nodes-container">
        {/* Liquid flow background effect */}
        <div className="liquid-background">
          <div className="liquid-blob" style={{ 
            left: `${getFlowPosition()}%`,
            background: `radial-gradient(circle, ${colors.secondary}20, transparent 70%)`
          }}></div>
        </div>
        
      
        
        {/* Nodes */}
        <div className="nodes-wrapper">
          {currentNodes.map((node) => (
            <div 
              key={node.id}
              className="node-wrapper"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div 
                className={`node ${isNodeActive(node.id) ? 'active' : ''} ${pulseNodes[node.id] ? 'pulse' : ''}`}
                style={isNodeActive(node.id) ? 
                  { background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` } : 
                  {}}
              >
                <span className="node-icon">{node.icon}</span>
                <span className="node-text">{node.title}</span>
                <span className="node-ripple" style={{ borderColor: colors.primary }}></span>
              </div>
              <div className={`node-description ${isNodeActive(node.id) ? 'active' : ''}`}>
                {node.description}
              </div>
            </div>
          ))}
        </div>


        {/* Connection paths between nodes - Curved SVG paths */}
        <svg className="connection-paths" viewBox={`0 0 ${(currentNodes.length-1) * 100} 50`} preserveAspectRatio="none">
          {currentNodes.map((node, index) => {
            if (index < currentNodes.length - 1) {
              return (
                <path 
                  key={`path-${index}`}
                  d={`M${index * 100},25 C${index * 100 + 50},15 ${(index+1) * 100 - 50},35 ${(index+1) * 100},25`}
                  className={`connection-path ${index <= activeNode ? 'active-path' : ''}`}
                  style={index <= activeNode ? { stroke: `url(#gradient-${index})` } : {}}
                />
              )
            }
            return null;
          })}
          
          {/* Define gradients for each path */}
          <defs>
            {currentNodes.map((node, index) => {
              if (index < currentNodes.length - 1) {
                return (
                  <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={colors.primary} />
                    <stop offset="100%" stopColor={colors.secondary} />
                  </linearGradient>
                )
              }
              return null;
            })}
          </defs>
        </svg>
      </div>

      {/* Info Card for detailed node information */}
      {infoCard && (
        <div
          className="hover-info-popup"
          style={{
            '--primary': colors.primary,
            '--gradient-bg': `linear-gradient(to right, ${colors.primary}10, transparent)`
          }}
        >
      
          <h3 style={{ color: colors.primary }}>{infoCard.title}</h3>
          <p className="info-description">{infoCard.description}</p>
          <ul className="info-details">
            {infoCard.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      
      {/* Feature tagline */}
      <div className="feature-tagline">
        {activeFeature === 'work' && <p>No inflated stars. No fake reviews. Just verified contribution.</p>}
        {activeFeature === 'bank' && <p>This isn't a platform you follow. It's infrastructure you help shape.</p>}
        {activeFeature === 'play' && <p>Collaborate, connect, and grow your skills in a gamified ecosystem.</p>}
      </div>
    </div>
  );
}