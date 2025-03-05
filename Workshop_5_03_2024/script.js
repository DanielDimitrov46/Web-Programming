class Contact {
    #online = false;

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.#online = false;
    }

    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;
        this.updateOnlineStatus();
    }

    updateOnlineStatus() {
        if (this.divTitle) {
            this.divTitle.classList.toggle("online", this.#online);
        }
    }

    render(id) {
        const container = document.getElementById(id);
        if (!container) {
            console.error(`Element with id ${id} not found.`);
            return;
        }

        this.article = document.createElement("article");
        this.article.innerHTML = `
        <div class="title">${this.firstName} ${this.lastName} <button>&#x2139;</button></div>
        <div class="info" style="display: none;">
        <span>&#x260E; ${this.phone}</span>
        <span>&#x2709; ${this.email}</span>
</div>        
`;
        this.divTitle = this.article.querySelector('.title');
        this.btn = this.article.querySelector('button');
        this.divInfo = this.article.querySelector('.info');

        this.btn.addEventListener('click', () => {
            this.divInfo.style.display = 'block';
            this.divInfo.style.display = 'none' ? 'block' : 'none';
        });
        this.updateOnlineStatus();
        container.appendChild(this.article);
    }
}

// Примерно използване:
const contact1 = new Contact("Иван", "Петров", "0888123456", "ivan@example.com");
const contact2 = new Contact("Мария", "Иванова", "0888765432", "maria@example.com");