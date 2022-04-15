class MobileNavbar {
    constructor(mainNav, navList, navItem, body) {
        this.mainNavbar = document.querySelector(mainNav);
        this.mobileList = document.querySelector(navList);
        this.navbarItem = document.querySelectorAll(navItem);
        this.bodyScroll = document.querySelector(body);
        this.activeClass = "active";
        this.scrollClass = "scroll"

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("aaa")
        this.mobileList.classList.toggle(this.activeClass);
        this.bodyScroll.classList.toggle(this.scrollClass);
    }

    addClickEvent() {
        this.mainNavbar.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mainNavbar) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".main_nav",
    ".nav_list",
    ".nav-item",
    "body",
)

mobileNavbar.init();