#pragma strict
var del: GameObject;
function Start () {
del = GameObject.Find("PowerT");
del.active = false;

del = GameObject.Find("PowerB");
del.active = false;

del = GameObject.Find("PowerL");
del.active = false;

del = GameObject.Find("PowerR");
del.active = false;

}

function Update () {

}