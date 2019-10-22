export interface Response {
    msg : String,
    pokemon : [{
    id :  Number,
    num: String,
    name:  String,
    img: String,
    type: [],
    height: String,
    weight: String,
    candy: String,
    candy_count:  Number,
    egg:  String,
    spawn_chance: Number,
    avg_spawns: Number,
    spawn_time:  String,
    multipliers:  [],
    weaknesses: [],
    next_evolution: [{    
        num: String ,
        name: String 
    }]
    status : String,
    lastUpdated : Date,
}]
}