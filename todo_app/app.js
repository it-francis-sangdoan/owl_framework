const { Component, mount, xml, useState } = owl;

class Root extends Component {
    static template = xml `
        <div>
            <div class="input-group-lg w-100 d-flex border rounded align-items-center">
                <input type="text" class="form-control-lg flex-fill border-0 me-1" placeholder="Add your new task" aria-label="Add your new task" aria-describedby="button-addon2"/>
                <input type="color" class="form-control-lg form-control-color border-0 bg-white m-0" id="color" value="#563d7c" title="Choose your color"/>
                <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-plus fs-3"></i></button>
            </div>
        </div>
        <ul class="d-flex flex-column mt-5 p-0">
            <t t-foreach="tasks" t-as="task" t-key="task.id">
                <li t-attf-style="background-color: #{task.color}" class="d-flex align-items-center justify-content-between border p-3 mb-2 rounded">
                <div class="form-check form-switch fs-5">
                    <input class="form-check-input" type="checkbox" value="" t-att-id="task.id"/>
                    <label class="form-check-label" t-att-for="task.id">
                        <t t-esc="task.name" />
                    </label>
                </div>
                <div>
                    <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                </div>
            </li>
            </t>
        </ul>
    `

    setup() {
        this.tasks = useState([{
                id: 1,
                name: "Task1",
                color: "#fff000",
                isCompledted: false
            },
            {
                id: 2,
                name: "Task2",
                color: "#f0f0f0",
                isCompledted: false
            },
            {
                id: 3,
                name: "Task3",
                color: "#ff0000",
                isCompledted: false
            }
        ])
    }
}

mount(Root, document.getElementById("root"))