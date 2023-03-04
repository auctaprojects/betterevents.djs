module.exports = (client) => {
    if(!client){
        throw new Error(`Cannot emit events to ${typeof client}. Provide valid client instantion`)
    } else {
        client.on(`channelUpdate`, (oldChannel, newChannel) => {
            if(oldChannel.name !== newChannel.name){
                client.emit(`channelNameUpdate`, (oldChannel, newChannel))
            }

            if(oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser){
                client.emit(`channelRateLimitUpdate`, (oldChannel, newChannnel))
            }

            if(oldChannel.rawPosition !== oldChannel.rawPosition){
                client.emit(`channelPositionChange`, (oldChannel, newChannel))
            }
        })
    }
}