import { Project } from "./project";

function applyDragEvents(): void {
    for (const elm of document.querySelectorAll(".drag") as any) {
        elm.ondragover = (e: Event) => e.preventDefault();
        elm.ondrop = (e: any) => {
            const data = e.dataTransfer.getData("text");
            
            e.preventDefault();
            e.target.appendChild(document.getElementById(data));
        }
    }
}

export function app() {
    (document.querySelector("#inputForm")! as HTMLFormElement).onsubmit = (e: Event) => {
        e.preventDefault();

        Project.addProject();
    }

    applyDragEvents();
}