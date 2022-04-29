import React from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: "stars",
      
      background: {
        color: {
          value: "linear-gradient(180deg, #08183A 4.33%, #4B3D60 18%, #FC9C54 50%, #ffffff 100.13%)"
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.05,
              sync: true,
              startValue: "max",
              count: 1,
              destroy: "min"
            },
            value: {
              min: 0,
              max: 0.5
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 10, max: 50 },
          },
        },
        detectRetina: true,
      },
    };

    return <Particles height={'300px'} options={options} init={this.customInit} />;
  }
}