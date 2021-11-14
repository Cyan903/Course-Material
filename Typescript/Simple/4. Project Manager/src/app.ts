const form = document.querySelector("#inputForm")! as HTMLFormElement;
const active = document.querySelector("#active")! as HTMLDivElement;
const completed = document.querySelector("#completed")! as HTMLDivElement;

type ProjectItem = {
    title?: string,
    description?: string,
    people?: number
}

class Project {
    private static projects: ProjectItem[] = [];

    constructor(
        public title: string,
        public description: string,
        public people: number
    ) {};

    static getProjectParams(): ProjectItem {
        const title = document.querySelector(`input[name="title"]`)! as HTMLInputElement;
        const description = document.querySelector(`input[name="description"]`)! as HTMLInputElement;
        const people = document.querySelector(`input[name="people"]`)! as HTMLInputElement;

        if (
            title.value.length == 0 ||
            description.value.length == 0 ||
            +people.value > 10 || +people.value < 0
        ) {
            alert("Missing.");
            return {};
        }

        return { title: title.value, description: description.value, people: +people.value };
    }

    static createDOMProject(prod: ProjectItem): void {
        const elm = document.querySelector("#active") as HTMLDivElement;

        elm.innerHTML += `
            <div class="item" draggable="true" id="id-${~~(Math.random()*10000)}" ondragstart="event.dataTransfer.setData('text', event.target.id);" >
                <h2><b>Title:</b> ${prod.title}</h2>
                <h4><b>Description:</b> ${prod.description}</h4>
                <h4><b>People:</b> ${prod.people}</h4>
            </div>
        `;
    }

    static addProject() {
        const data: ProjectItem = this.getProjectParams();

        if (Object.keys(data).length !== 0) {
            this.projects.push(data);
            this.createDOMProject(data);
        }
    }
}

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

form.onsubmit = (e: Event) => {
    e.preventDefault();
    
    Project.addProject();
}

applyDragEvents();