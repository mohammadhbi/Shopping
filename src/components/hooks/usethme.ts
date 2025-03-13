// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import React from 'react'

//     const THEME_KEY = "theme";
//     const getTheme= () => {
//         return localStorage.getItem(THEME_KEY) || "light";
//     }
// export const useTheme = () => {
//     const queryclient = useQueryClient();
    
//     }
// const {data:theme} = useQuery({
//     queryKey: ["theme"],
//     queryFn: getTheme,
// })
//  const {mutete: toggleTheme} = useMutation({
//     mutationFn: () => {
//         const newTheme = theme === "light" ? "dark" : "light";
//         localStorage.setItem(THEME_KEY, newTheme);
//         return newTheme;
//     },
//     onSuccess: () => {
//         queryclient.setQueryData( ["theme"],newTheme);
//     }
//     return {theme, toggleTheme}
//  })

 

// export default useTheme
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// const THEME_KEY = "theme";

// // Function to get the theme from localStorage
// const getTheme = () => {
//   return localStorage.getItem(THEME_KEY) || "light";
// };

// export const useTheme = () => {
//   const queryClient = useQueryClient();

//   // Get theme from cache/localStorage
//   const { data: theme } = useQuery({
//     queryKey: ["theme"],
//     queryFn: getTheme,
//     initialData: "light", // Default theme if no value in storage
//   });

//   // Mutation to update the theme
//   const { mutate: toggleTheme } = useMutation({
//     mutationFn: () => {
//       const newTheme = theme === "light" ? "dark" : "light";
//       localStorage.setItem(THEME_KEY, newTheme);
//       return newTheme;
//     },
//     onSuccess: (newTheme) => {
//       queryClient.setQueryData(["theme"], newTheme);
//     },
//   });

//   return { theme, toggleTheme };
// };

// export default useTheme;
import { useState, useEffect } from "react";

const THEME_KEY = "theme";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Adds 'dark' class to <html>
    } else {
      document.documentElement.classList.remove("dark"); // Removes 'dark' class from <html>
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export default useTheme;

