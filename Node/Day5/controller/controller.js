export const controller = (req,res) => {
    console.log(req.body);
    const {Username} = req.body;
    if (Username =="Guru") {
        res.status(200).json({msg:"welcome"})
    }
    else{
        res.status(404).json({msg:"user not found"})
    }
}

export const reverseController = (req,res) =>{
    console.log(req.body);
    const {numbers} = req.body;
    const responseArray = numbers.reverse();
    console.log(responseArray);
    res.status(200).json({result : responseArray})
}

export const sum = (req,res) => {
    console.log(req.body);
    const {a,b} = req.body;
    const resResult = a + b;
    console.log(resResult)
    res.status(200).json({result:resResult })

}