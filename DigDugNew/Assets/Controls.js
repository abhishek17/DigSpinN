#pragma strict
import System;
var floor : GameObject;

	var timeS :double;
	//timeS = Time.realtimeSinceStartup;
	var timeN : double;
	
	floor = GameObject.Find("Floor");
	var forw : Vector3;
	var right : Vector3;
	forw=floor.transform.up;
	right=floor.transform.right;
	
	var dell: GameObject;
	var delr: GameObject;
	var delt: GameObject;
	var delb: GameObject;
	var prevButton="d";
	
	
function Start () {
delt = GameObject.Find("PowerT");
delt.active = false;

delb = GameObject.Find("PowerB");
delb.active = false;

dell = GameObject.Find("PowerL");
dell.active = false;

delr = GameObject.Find("PowerR");
delr.active = false;

}

function Update () {

//Debug.Log(timeN-timeS);
if(Input.GetKeyDown ("i"))
{
	if(prevButton=="i")
	{
		timeS = Time.realtimeSinceStartup;
		//del = GameObject.Find("PowerT");
		delt.active = true;
	}
	delr.active = false;
		dell.active = false;
		delb.active = false;
	
prevButton="i";
}
else if(Input.GetKeyDown ("j"))
{

if(prevButton=="j")
	{
		timeS = Time.realtimeSinceStartup;
		//del = GameObject.Find("PowerL");
		dell.active = true;
		
	}
delr.active = false;
		delt.active = false;
		delb.active = false;
prevButton="j";
}
else if(Input.GetKeyDown ("k"))
{
if(prevButton=="k")
	{
		timeS = Time.realtimeSinceStartup;
		//del = GameObject.Find("PowerB");
		delb.active = true;
		
	}
	
delt.active = false;
		dell.active = false;
		delr.active = false;
prevButton="k";
}
else if(Input.GetKeyDown ("l"))
{

if(prevButton=="l")
	{
		timeS = Time.realtimeSinceStartup;
		//del = GameObject.Find("PowerR");
		delr.active = true;
		
	}
	dell.active = false;
		delt.active = false;
		delb.active = false;
prevButton="l";
}


if(prevButton=="i")
{
rigidbody.AddForce(forw/50);
transform.Translate(forw/50);
//transform.Rotate(forw);
//rigidbody.AddForce (0,0,-900.8);
//Debug.Log("ok");
}
else if(prevButton=="k")
{
rigidbody.AddForce(-forw/50);
transform.Translate(-forw/50);
//transform.Rotate(-forw);
}
else if(prevButton=="j")
{
//transform.rotation.x=0.7;
rigidbody.AddForce(right/50);
transform.Translate(right/50);
//particleSystem.Play();

}
else if(prevButton=="l")
{
//transform.rotation.x=-0.7;
rigidbody.AddForce(-right/50);
transform.Translate(-right/50);

}

timeN = Time.realtimeSinceStartup;
if(timeN-timeS>1.2)
{
dell.active=false;
delr.active=false;
delt.active=false;
delb.active=false;
}


}



