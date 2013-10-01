#pragma strict
var PlayerT;
function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "Player")
    {
    	PlayerT=1;
    	//Debug.Log(rigidbody.velocity);
    	if(rigidbody.velocity.z <-3||rigidbody.velocity.z >3)
        {Destroy(col.gameObject);
        Destroy(gameObject);
        //col.rigidbody.AddForce(-transform.up*5, ForceMode.Acceleration);
        Debug.Log("delete plaese");}
    }
    /*
    else if(col.gameObject.name == "Dirt" && PlayerT==1 )
    {
    	Debug.Log(rigidbody.velocity);
    	if(rigidbody.velocity.z <-0.1||rigidbody.velocity.z >0.1)
        {
        Destroy(gameObject);
        col.rigidbody.AddForce(-transform.up*5, ForceMode.Acceleration);
        Debug.Log("delete plaese");}
    }*/
    
    
    }