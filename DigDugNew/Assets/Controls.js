#pragma strict

function Update () {
if(Input.GetKeyDown ("k"))
{
transform.Translate(0,0,0.1);
rigidbody.AddForce(0,0,1000);
//rigidbody.AddForce (0,0,-900.8);
//Debug.Log("ok");
}
if(Input.GetKeyDown ("i"))
{
rigidbody.AddForce(0,0,-1000);
transform.Translate(0,0,-0.1);
}
if(Input.GetKeyDown ("j"))
{
rigidbody.AddForce(1000,0,0);
transform.Translate(0.1,0,0);
}
if(Input.GetKeyDown ("l"))
{
rigidbody.AddForce(-1000,0,0);
transform.Translate(-0.1,0,0);
}
}