
export function ChangeTheme(theme: "light" | "dark"): void {

    const element = document.documentElement;

    if (theme === "light") {
        element.classList.add("light");
        localStorage.setItem("theme", theme)
    } else {
        element.classList.remove("light");
        localStorage.setItem("theme", theme)

    }
}