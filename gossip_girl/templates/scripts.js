document.addEventListener('DOMContentLoaded', function() {
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        recipe.addEventListener('mouseover', () => {
            recipe.querySelector('img').classList.add('zoom');
        });
        recipe.addEventListener('mouseout', () => {
            recipe.querySelector('img').classList.remove('zoom');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addPostButton = document.getElementById('addPostButton');
    const saveButton = document.getElementById('saveButton');
    const textInput = document.getElementById('textInput');
    const savedTextsContainer = document.getElementById('savedTexts');

    if (addPostButton) {
        addPostButton.addEventListener('click', function() {
            textInput.style.display = 'block';
            saveButton.style.display = 'block';
            addPostButton.style.display = 'none';
        });
    }

    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const text = textInput.value;
            if (text.trim()) {
                let savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
                savedPosts.push(text);
                localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
                alert('Texto salvo com sucesso!');
                textInput.style.display = 'none';
                saveButton.style.display = 'none';
                addPostButton.style.display = 'block';
                textInput.value = '';
            } else {
                alert('Por favor, digite algum texto antes de salvar.');
            }
        });
    }

    if (savedTextsContainer) {
        const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
        savedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.textContent = post;
            savedTextsContainer.appendChild(postElement);
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const addPostButton = document.getElementById('addPostButton');
    const saveButton = document.getElementById('saveButton');
    const textInput = document.getElementById('textInput');
    const savedTextsContainer = document.getElementById('savedTexts');
    const allPostsContainer = document.getElementById('allPosts');

 

   


    if (allPostsContainer) {
        const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
        savedPosts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <p>${post}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            allPostsContainer.appendChild(postElement);
        });
    }
});

function editPost(index) {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    const newText = prompt("Edite seu texto:", savedPosts[index]);
    if (newText !== null && newText.trim()) {
        savedPosts[index] = newText;
        localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
        alert('Texto editado com sucesso!');
        location.reload();
    }
}

function deletePost(index) {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    if (confirm("Tem certeza que deseja apagar o post?")) {
        savedPosts.splice(index, 1);
        localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
        alert('Texto deletado com sucesso!');
        location.reload();
    }
}