const body = document.querySelector("body");
const resetBtn = document.querySelector(".reset")
const library = document.querySelector(".library")
const librarian = document.querySelector(".librarian")

const userTitle = document.querySelector(".user-title")
const titleError = document.querySelector(".title-error")
const userAuthor = document.querySelector("#user-author")
const authorError = document.querySelector(".author-error")
const bookPages = document.querySelector("#book-pages")
const pagesError = document.querySelector(".pages-error")

let myLibrary = [];
function Book() {
    this.title = userTitle.value;
    author = userAuthor.value;
    pages = bookPages.value;
    info = () => {
        return `${this.title} by ${this.author} with ${this.pages} pages `
    }
}
function addBookToLibrary() {
    Book()
    myLibrary.push(info());

    let div = document.createElement("div");
    div.textContent = `${myLibrary[(myLibrary.length - 1)]}`
    div.setAttribute("class", `${myLibrary.length}`)
    div.style.cssText = "width: 40%; height: 150px; display: flex; flex-Direction: column; justify-Content: center; align-Items: center; background: lightblue; margin: 10px; padding: 10px; font-Size: 18px; font-Weight: 800; border-Radius: 10px; text-Align: center;"
    library.append(div)
    let rmvbtn = document.createElement("button")
    rmvbtn.textContent = "Remove"
    rmvbtn.setAttribute("class", `${myLibrary.length}`)
    rmvbtn.style.cssText = "width: 30%; height: 50px; display: flex; justify-Content: center; align-Items: center; background: rgba(252, 143, 1, 0.8); margin: 30px 0 10px 0; color: black; border-Radius: 10px; border: none; padding: 5px;"
    div.append(rmvbtn)

    rmvbtn.addEventListener("click", () => {
        if (div.hasAttribute("class") === rmvbtn.hasAttribute("class")) {
            myLibrary.splice([div.getAttribute("class") - 1], 1)
            div.remove()
        }
    })
    let readbtn = document.createElement("button")
    readbtn.textContent = "STATUS"
    readbtn.setAttribute("class", `${myLibrary.length}`)
    readbtn.style.cssText = "width: 30%; height: 50px; display: flex; justify-Content: center; align-Items: center; background: rgba(252, 143, 1, 0.8); margin: 5px; color: black; border-Radius: 10px; border: none; padding: 5px;"
    div.append(readbtn)
    readbtn.addEventListener("click", () => {
        readbtn.classList.toggle("read")
        if (readbtn.getAttribute("class").includes("read")) {
            readbtn.textContent = "READ"
            div.style.cssText = "width: 40%; height: 150px; display: flex; flex-Direction: column; justify-Content: center; align-Items: center; background: rgb(26, 238, 150); color: black; margin: 10px; padding: 10px; font-Size: 18px; font-Weight: 800; border-Radius: 10px; text-Align: center;"
        }  else {
            readbtn.textContent = "UNREAD"
            div.style.cssText = "width: 40%; height: 150px; display: flex; flex-Direction: column; justify-Content: center; align-Items: center; background: rgb(238, 199, 26); color: black; margin: 10px; padding: 10px; font-Size: 18px; font-Weight: 800; border-Radius: 10px; text-Align: center;"
        }
    })
    resetBtn.addEventListener("click", () => {
        userTitle.value = " ";
        userAuthor.value = " ";
        bookPages.value = " ";
    })
}
userTitle.addEventListener('input', () => {
    if (userTitle.validity.valid) {
        titleError.textContent = '';
        titleError.className = 'title-error'
    } else {
        showError()
    }
})
userAuthor.addEventListener('input', () => {
    if (userAuthor.validity.valid) {
        authorError.textContent = '';
        authorError.className = 'author-error'
    } else {
        showError()
    }
})
bookPages.addEventListener('input', () => {
    if (bookPages.validity.valid) {
        pagesError.textContent = '';
        pagesError.className = 'pages-error'
    } else {
        showError()
    }
})
librarian.addEventListener('submit', (e) => {
    if (!userTitle.validity.valid) {
        showError()
        alert("Invalid Title")
        e.preventDefault()
    }
    if (!userAuthor.validity.valid) {
        showError()
        alert("Invalid Author")
        e.preventDefault()
    }
    if (!bookPages.validity.valid) {
        showError()
        alert("Invalid Pages")
        e.preventDefault()
    } else {
        addBookToLibrary();
        e.preventDefault()
    }
})
function showError() {
    if (userTitle.validity.valueMissing) {
        titleError.textContent = 'You need to enter a book title.'
    titleError.className = 'title-error active'
    } else if (userTitle.validity.typeMismatch) {
        titleError.textContent = 'Values needs to be text'
    titleError.className = 'title-error active'
    } else if (userTitle.validity.tooShort) {
        titleError.textContent = `Title too short, should be at least ${userTitle.minLength}`
    titleError.className = 'title-error active'
    }
    if (userAuthor.validity.valueMissing) {
        authorError.textContent = 'You need to enter an Author.'
    authorError.className = 'author-error active'
    } else if (userAuthor.validity.typeMismatch) {
        authorError.textContent = 'Values needs to be text'
    authorError.className = 'author-error active'
    } else if (userAuthor.validity.tooShort) {
        authorError.textContent = `Author too short, should be at least ${userAuthor.minLength}`
    authorError.className = 'author-error active'
    }
    if (bookPages.validity.valueMissing) {
        pagesError.textContent = 'You need to enter the pages.'
    pagesError.className = 'pages-error active'
    } else if (bookPages.validity.typeMismatch) {
        pagesError.textContent = 'Values needs to be number'
    pagesError.className = 'pages-error active'
    } else if (bookPages.validity.rangeUnderflow) {
        pagesError.textContent = `Pages too short, should be at least ${bookPages.min}, books are ${bookPages.min} minimum`
    pagesError.className = 'pages-error active'
    }
}