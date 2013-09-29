#pragma strict



var count1=0;
var count2=0;
function Update () {
if(Input.GetKeyDown ("a"))
{
if(count1<2)
{
transform.Rotate(0,0,10);
//rigidbody.AddForce (0,0,-900.8);
count1++;
count2--;
Debug.Log("ok");
}
}
if(Input.GetKeyDown ("d"))
{
if(count2<2)
{
transform.Rotate(0,0,-10);
count2++;
count1--;
}
}

}