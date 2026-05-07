import { useDispatch, useSelector } from "react-redux";
import { todark, tolight } from "../slice/themeslice";
import { useEffect } from "react";

const useTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? dispatch(todark()) : dispatch(tolight());
  };

  return { theme, toggleTheme };
};

export default useTheme;
