const validateRequestAccept = (req, res, next) => {
    let isValidAcceptHeader = true;
    if(!(req.get("accept") === "application/json" || req.get("accept").includes("*/*"))) {
            isValidAcceptHeader = false;
    }
    if(isValidAcceptHeader){
        next();
    }else{
        res.status(406).json({message: "The accept header mismatches the supported server response!"});
    }
};

const validateRequestContent = (req, res, next) => {
    let isValidContentType = true;
    if(req.get("content-type") !== "application/json") {
        isValidContentType = false;
    }
    if(isValidContentType){
        next();
    }else{
        res.status(400).json({message: "The content header mismatches the supported server response!"});
    }
};

module.exports = {
    validateRequestAccept,
    validateRequestContent
}

