const supabase = SupabaseClient.createClient(
    'https://xqkgqqabjfbivulbhpan.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxa2dxcWFiamZiaXZ1bGJocGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NzUzMzcsImV4cCI6MTk4MjE1MTMzN30.p3hSIJp-HVmnnb74bBDAcJKKRlbavEYVyR7tNAMBMYE',);


const messagesElement = document.querySelector('#messages');

function addMessageToPage(message) {
    const element = document.createElement('li');
    element.classList.add('card', 'm-2');
    element.innerHTML = `
   <div class="card-body">
        <div class="row">
            <div class="col-sm-2 avatar-container">
                <img src="user.png" class="mr-3" alt="..." height="50" width="50">
                <p class="avatar-username">${message.username}</p>
            </div>
            <div class="col-sm-10">
                <p>${message.content}</p>
            </div>
        </div>
    <div class="row">
        <p class="col-sm-12 timestamp">${message.created_at}</p>
    </div>
    </div>
    `;
    messagesElement.append(element);
}


async function init() {    
    let { data: messages } = await client
    .from('messages')
    .select('*')
    
    messages.forEach(addMessageToPage); 

    client
        .from('messages ')
        .on('INSERT', (message) =>{
            addMessageToPage(message.new)
            
        })
    .subscribe();
}

init();