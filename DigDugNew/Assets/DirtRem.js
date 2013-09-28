#pragma strict

 function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "Player")
    {
        Destroy(gameObject);
        //col.rigidbody.AddForce(-transform.up*5, ForceMode.Acceleration);
        //Debug.Log("bla bla");
    }
    
    }