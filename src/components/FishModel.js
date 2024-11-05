import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function FishModel() {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, '/models/fish2.glb');
  const { animations } = gltf;
  const { actions } = useAnimations(animations, modelRef);

  // Define the animations and their durations
  const animationSequence = [
    { name: "idle", duration: 5330 },   // 5.33 seconds for idle
    { name: "swim", duration: 1360 },   // 1.36 seconds for swim
    { name: "bite", duration: 1630 },   // 1.63 seconds for bite
  ];

  useEffect(() => {
    let currentAnimationIndex = 0;

    const playNextAnimation = () => {
      // Stop all animations
      Object.values(actions).forEach(action => action.stop());

      // Get the current animation and play it
      const { name, duration } = animationSequence[currentAnimationIndex];
      const action = actions[name];

      if (action) {
        action.reset().fadeIn(0.5).play();
        action.setLoop(THREE.LoopOnce);
      }

      // Move to the next animation in the sequence
      currentAnimationIndex = (currentAnimationIndex + 1) % animationSequence.length;

      // Schedule the next animation
      setTimeout(playNextAnimation, duration);
    };

    // Start the animation sequence
    playNextAnimation();

    // Clean up on component unmount
    return () => {
      Object.values(actions).forEach(action => action.stop());
    };
  }, [actions]);

  return <primitive ref={modelRef} object={gltf.scene} scale={[40, 40, 40]} />;
}

export default FishModel;
