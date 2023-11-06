<template>
    <div class="real-time-radar">
      <div class="radar-pulse">
        <div class="pulse"></div>
      </div>
      <p class="message">Aguardando novos pedidos...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
  };
  </script>
  
  <style scoped>
  /* RadarPulseAnimation.vue */
  .radar-pulse {
      position: relative;
      width: 100px;
      height: 100px;
    }
    
    .radar-pulse .pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid #f39c12;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(0.8);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.2;
      }
      100% {
        transform: scale(0.8);
        opacity: 0.7;
      }
    }
    
  .real-time-radar {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    height: 20vh;
  }
  
  .message {
    font-size: 20px;
  }
  </style>