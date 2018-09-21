console.log('app is alive');
/* After clicking on a certain channel this channel should be displayed on the top of the chat */
function switchChannel(channelName)
{
    console.log('Tuning into channel'+ channelName);
    document.getElementById('h1').innerHTML='<h1>' + channelName + '&nbsp;' +'<small>by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong> upgrading.never.helps</strong> <span id="appStar"><img id="star" src="http://ip.lfe.mw.tum.de/sections/star-o.png" onclick="switchStar()" alt="starred"></span>    </small>'+ '</h1>';
}

/*After clicking on the star in appbar the display of the star changes */
function switchStar()
{
    console.log('Switch star');
    $('#star').html('<img src="http://ip.lfe.mw.tum.de/sections/star.png" alt="starred">');
}

/*After clicking on a button in the tap bar the originally highlighted buttons should be not highlighted anymore and the new selected button should be highlighted */
function selectTab(tabId)
{
 /*   console.log('Tap Bar selected');*/
    $("button").removeClass('selected');
 /*   console.log('removed');*/
/* $("button").addClass('selected');*/
    document.getElementById(tabId).addClass('selected');
    console.log('added');
}

/* After clicking on emojii box the display of the emojii box will be displayed (toggled)*/
function changeEmojiBox()
{
    console.log('in change Emojii arrived');
    $('#emojis-button').toggle();  
}