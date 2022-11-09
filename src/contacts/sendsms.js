export function send(message){
    console.log(message);
    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
            console.log('success');
          } else {
            console.log('error');
          }
        });
}