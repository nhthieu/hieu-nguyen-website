"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";

type Props = {}

function FloatingParticles({ }: Props) {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: theme === "dark" ? "#f5f5f5" : "#121212",
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            outModes: {
              default: "out",
            },
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default FloatingParticles