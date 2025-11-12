// post
export const Warrior = (req, res) => {
    console.log(req.body)
    const {warriorName, warriorPlace, warriorSuperPower, WarriorExperience } = req.body
    if(warriorName == "Captain America") {
        res.status(200).json({Name : warriorName, Place : warriorPlace, Power : warriorSuperPower, Experience : WarriorExperience, msg : "Yes i received"})
    }
    else{
        res.status(404).json({msg : "Not found"})
    }
}

//get
export const stone = (req,res) => {
    console.log(req.params)
    const {id} = req.params;
    const stonesValue = {1 : "Power Stone", 2: "Sole stone", 3: "Mine Stone", 4: "Time Stone"};
    // const userId = id ; 
    // const keys = Object.keys(stonesValue)
    // console.log(keys)
    // console.log(stonesValue[userId]);
    const stoneName = stonesValue[id];
    if(stoneName){
        res.status(200).json({stone: stoneName})
    }
    else{
        res.status(404).json({msg : "Not found"})
    }
}