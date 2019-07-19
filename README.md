# Simple notification plugin




# Exaples

```sh

    
    //info message
     new Notify('Title','Notification message')
     
    //success message
     new Notify('Title','Notification message','success')
     
    //success message
     new Notify('Title','Notification message','warning')
     
    //danger message
     new Notify('Title','Notification message','danger')
     
     //positions [ right-top,right-bottom,left-top,left-bottom ]
     // default position right-top
     new Notify('Titlle','Notification message','info',{
         position:'right-bottom'
     })
     
     //all options 
      new Notify('Title','Notification message','info',{
                /*
                    position: 'right-top',
                    speed: 1000,
                    distance: '100px',
                    background: '#fff',
                    titleColor: '#3e3e3e',
                    messageColor: '#878787',
                    title: 'Notification',
                    message: '',
                    type: 'info',
                    typeColor: {
                        info: '#1D72F3',
                        success: '#28985a',
                        warning: '#FFC007',
                        danger: 'red'
                    }
                */
     })
     
     or
      new Notify({
            title: 'your notification title',
            message: 'your notification message',
            type: 'info',
            position: 'right-top',
            speed: 1000,
            distance: '100px',
            background: '#fff',
            titleColor: '#3e3e3e',
            messageColor: '#878787',
            typeColor: {
                info: '#1D72F3',
                success: '#28985a',
                warning: '#FFC007',
                danger: 'red'
            }
      })
     
 
```

