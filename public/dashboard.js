async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const post_content = document.querySelector('#details').value.trim();


    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, post_content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);