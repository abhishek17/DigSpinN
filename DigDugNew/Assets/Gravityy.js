#pragma strict


/*
function Update () {
if(Input.GetKeyDown ("a"))
{
Physics.gravity = Vector3(0, 0, 9.8);
//rigidbody.AddForce (0,0,-900.8);
Debug.Log("ok");
}
if(Input.GetKeyDown ("d"))
{
Physics.gravity = Vector3(0, 0, -9.8);
}
if(Input.GetKeyDown ("w"))
{
Physics.gravity = Vector3(9.8, 0, 0);
}
if(Input.GetKeyDown ("s"))
{
Physics.gravity = Vector3(-9.8, 0, -9.8);
}
}
*/

function Update () {
if(Input.GetKeyDown ("a"))
{
transform.Rotate(0,0,10);
//rigidbody.AddForce (0,0,-900.8);
Debug.Log("ok");
}
if(Input.GetKeyDown ("d"))
{
transform.Rotate(0,0,-10);
}
if(Input.GetKeyDown ("w"))
{
transform.Rotate(10,0,0);
}
if(Input.GetKeyDown ("s"))
{
transform.Rotate(-10,0,0);
}
}