import { Grid, Tooltip, useTheme } from "@nextui-org/react";

import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useRouter } from "next/router";

const ThemeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { asPath } = useRouter();

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <Grid
      css={{
        position: "absolute",
        top: "$8",
        right: "$8",
        zIndex: 9,
        cursor: "pointer",

        "@smMax": {},
      }}
    >
      <Tooltip
        content={`Turn on ${isDark ? "light" : "dark"} mode.`}
        onClick={handleToggle}
        rounded
        placement="left"
        css={{
          width: "fit-content",
        }}
      >
        {isDark ? (
          <MdOutlineLightMode size={24} />
        ) : (
          <MdDarkMode
            size={24}
            color={asPath.split("?")[0] === "/login" ? "white" : "currentColor"}
          />
        )}
      </Tooltip>
    </Grid>
  );
};

export default ThemeToggle;
