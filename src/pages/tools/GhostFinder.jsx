import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './GhostFinder.css';

const GhostFinder = () => {
  const allEvidence = [
    { id: 'emf-5', name: 'EMF Level 5', icon: '📡' },
    { id: 'spirit-box', name: 'Spirit Box', icon: '📻' },
    { id: 'handprints', name: 'Handprints', icon: '👋' },
    { id: 'ghost-orb', name: 'Ghost Orb', icon: '🔮' },
    { id: 'ghost-writing', name: 'Ghost Writing', icon: '✍️' },
    { id: 'freezing-temps', name: 'Freezing Temperatures', icon: '❄️' },
    { id: 'laser', name: 'Laser Projector', icon: '👻' },
    { id: 'wither', name: 'Wither', icon: '🥀' },
  ];

  // Ghost data with their evidence
  const ghostData = [
    { 
      name: 'Spirit', 
      evidence: ['emf-5', 'spirit-box', 'ghost-writing'],
    },
    { 
      name: 'Wraith', 
      evidence: ['emf-5', 'spirit-box', 'laser'],
    },
    { 
      name: 'Phantom', 
      evidence: ['spirit-box', 'handprints', 'laser'],
    },
    { 
      name: 'Poltergeist', 
      evidence: ['spirit-box', 'handprints', 'ghost-writing'],
    },
    { 
      name: 'Banshee', 
      evidence: ['handprints', 'ghost-orb', 'laser'],
    },
    { 
      name: 'Jinn', 
      evidence: ['emf-5', 'handprints', 'freezing-temps'],
    },
    { 
      name: 'Mare', 
      evidence: ['spirit-box', 'ghost-orb', 'ghost-writing'],
    },
    { 
      name: 'Revenant', 
      evidence: ['ghost-orb', 'ghost-writing', 'freezing-temps'],
    },
    { 
      name: 'Shade', 
      evidence: ['emf-5', 'ghost-writing', 'freezing-temps'],
    },
    { 
      name: 'Demon', 
      evidence: ['handprints', 'ghost-writing', 'freezing-temps'],
    },
    { 
      name: 'Yurei', 
      evidence: ['ghost-orb', 'freezing-temps', 'laser'],
    },
    { 
      name: 'Oni', 
      evidence: ['emf-5', 'freezing-temps', 'laser'],
    },
    { 
      name: 'Yokai', 
      evidence: ['spirit-box', 'ghost-orb', 'laser'],
    },
    { 
      name: 'Hantu', 
      evidence: ['handprints', 'ghost-orb', 'freezing-temps'],
    },
    { 
      name: 'Goryo', 
      evidence: ['emf-5', 'handprints', 'laser'],
    },
    { 
      name: 'Myling', 
      evidence: ['emf-5', 'handprints', 'ghost-writing'],
    },
  ];

  const [selectedEvidence, setSelectedEvidence] = useState([]);
  const [possibleGhosts, setPossibleGhosts] = useState(ghostData);
  const [selectedGhost, setSelectedGhost] = useState(null);

  // Update possible ghosts when evidence changes
  useEffect(() => {
    if (selectedEvidence.length === 0) {
      setPossibleGhosts(ghostData);
      return;
    }

    const filtered = ghostData.filter(ghost => 
      selectedEvidence.every(evidence => ghost.evidence.includes(evidence))
    );
    
    setPossibleGhosts(filtered);
  }, [selectedEvidence]);

  const handleEvidenceClick = (evidenceId) => {
    if (selectedEvidence.includes(evidenceId)) {
      setSelectedEvidence(selectedEvidence.filter(id => id !== evidenceId));
    } else {
      setSelectedEvidence([...selectedEvidence, evidenceId]);
    }
  };

  const handleReset = () => {
    setSelectedEvidence([]);
    setSelectedGhost(null);
  };

  const handleGhostClick = (ghost) => {
    setSelectedGhost(ghost);
  };

  return (
    <div className="ghost-finder-container">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="ghost-finder-title"
      >
        Ghost Evidence Finder
      </motion.h1>
      
      <div className="ghost-finder-content">
        <motion.div 
          className="evidence-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Select Evidence <span className="evidence-counter">{selectedEvidence.length} selected</span></h2>
          
          <div className="evidence-grid">
            {allEvidence.map((evidence) => {
              const isSelected = selectedEvidence.includes(evidence.id);
              
              return (
                <motion.div
                  key={evidence.id}
                  className={`evidence-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleEvidenceClick(evidence.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    scale: isSelected ? 1.05 : 1
                  }}
                >
                  <div className="evidence-icon">{evidence.icon}</div>
                  <div className="evidence-name">{evidence.name}</div>
                  {isSelected && (
                    <motion.div
                      className="selected-indicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
          
          <motion.button
            className="reset-button"
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTrash /> Reset
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="ghosts-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Possible Ghosts ({possibleGhosts.length})</h2>
          
          <div className="ghosts-grid">
            <AnimatePresence>
              {possibleGhosts.length > 0 ? (
                possibleGhosts.map((ghost) => (
                  <motion.div
                    key={ghost.name}
                    className={`ghost-card ${selectedGhost?.name === ghost.name ? 'selected' : ''}`}
                    onClick={() => handleGhostClick(ghost)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    layout
                  >
                    <h3>{ghost.name}</h3>
                    <div className="ghost-evidence">
                      {ghost.evidence.map(evidenceId => {
                        const evidence = allEvidence.find(e => e.id === evidenceId);
                        return (
                          <div 
                            key={evidenceId} 
                            className={`evidence-tag ${selectedEvidence.includes(evidenceId) ? 'matched' : ''}`}
                          >
                            <span className="evidence-tag-icon">{evidence.icon}</span>
                            <span className="evidence-tag-name">{evidence.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="no-ghosts"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaExclamationTriangle size={48} className="warning-icon" />
                  <p>No ghosts found. Please check you have entered all evidences correctly.</p>
                  <br />
                  <p>If you have entered the evidences correctly and there are still no ghosts found, it is likely to be a Skinwalker</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedGhost && (
          <motion.div 
            className="ghost-details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h2>{selectedGhost.name}</h2>
            <p className="ghost-description">{selectedGhost.description}</p>
            <div className="ghost-info-grid">
              <div className="ghost-info-card">
                <h4>Strength</h4>
                <p>{selectedGhost.strength}</p>
              </div>
              <div className="ghost-info-card">
                <h4>Weakness</h4>
                <p>{selectedGhost.weakness}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GhostFinder;
