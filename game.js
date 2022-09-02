let userPattern = [];
let machinePattern = [];
let colorGroups = ["red", "green","blue", "yellow"];
let level = 0;


$(document).keydown(()=>{
    palyGame();
  }); 


const palyGame = ()=>{

    $("#level-title").text("level "+level);
    let ridx = Math.floor(Math.random() * 4);
    let color = colorGroups[ridx];
    machinePattern.push(color);
    clicked(color);
    PlayAudio(color);

  }


  const restart = ()=>{
    $("#level-title").text("Press A Key to Start");
    userPattern = [];
    machinePattern = [];
    level = 0;
  };




  $('.btn').click(()=>{ 

    // //Gives name "red";
    
    let chosenColor =this.id;
    userPattern.push(chosenColor);

    // PlayAudio(this.id);

    // clicked(this.id);
    PlayAudio(chosenColor);
    clicked(chosenColor);

    checkPattern();


});



const checkPattern = ()=>{
    let i = userPattern.length -1;

    if(userPattern[i] === machinePattern[i]){
            if(userPattern.length === machinePattern.length){
               
                level++;
                userPattern = [];
                setTimeout(() => {
                    palyGame();
                }, 1500);
                
        }
        
    }
    else{
        PlayAudio("wrong");
       
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        }, 100)
        restart();

    }
};

const clicked = (name)=>{
    let Id = "#"+name;
    $(Id).addClass("pressed");

    setTimeout(()=>{
        $(Id).removeClass("pressed");
    }, 100);
};

const PlayAudio = (id)=>{


    let audioName = "sounds/"+id+".mp3";
    const music = new Audio(audioName);
    music.play();


};

const NextPattern = ()=>{
    let index = Math.floor(Math.random()*4);
    let color = colorGroups[index];

    machinePattern.push(color);

    PlayAudio(color);
    clicked(color);
    
};