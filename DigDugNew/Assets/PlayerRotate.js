#pragma strict

var floor : GameObject;
	
	floor = GameObject.Find("Floor");
	var forw : Vector3;
	var right : Vector3;
	forw=floor.transform.forward;
	right=floor.transform.right;

var count1=0;
var count2=0;
function Update () {
if(Input.GetKeyDown ("w"))
{
if(count1<2)
{
transform.Rotate(-10,0,0);
//Physics.gravity = Vector3(110,0, 0);
Physics.gravity = -forw*10;
//rigidbody.AddForce (0,0,-900.8);
count1++;
count2--;
Debug.Log("ok");
}
}
if(Input.GetKeyDown ("s"))
{
if(count2<2)
{
transform.Rotate(10,0,0);
//Physics.gravity = Vector3(-110,0, 0);
Physics.gravity = forw*10;
count2++;
count1--;
}
}

}