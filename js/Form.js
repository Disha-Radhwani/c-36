class Form{

constructor(){
    


}

display(){
    var title=createElement('h3')
    title.html("Car Racing Game")
    title.position(100,50)
    
    var input=createInput("Enter Your First Name")
    input.position(100,100)

    var button=createButton("Play")
    button.position(150,200)

    button.mousePressed(function(){

        input.hide();
        button.hide();

        var name = input.value()

        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount)

        var greeting=createElement('h3')
        greeting.html("Hello " + name)
        greeting.position(200,250)

        
    })
}

    


}