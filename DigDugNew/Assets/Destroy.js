#pragma strict

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "Player")
    {
    	Debug.Log(col.rigidbody.velocity);
    	if(col.rigidbody.velocity.x <-1||col.rigidbody.velocity.y <-1||col.rigidbody.velocity.z <-1)
        {Destroy(col.gameObject);
        //col.rigidbody.AddForce(-transform.up*5, ForceMode.Acceleration);
        Debug.Log("delete plaese");}
    }
    
    }