#pragma strict



/*
void OnCollisionStay(Collision col)
    {
        if(col.gameObject.name == "Cube")
        {
            //Destroy(col.gameObject)
            col.rigidbody.AddForce(-transform.forward*500, ForceMode.Acceleration);
            Debug.Log("bla bla");
        
        }
        
        }
        
  */      
 function OnCollisionStay (col : Collision)
{
    if(col.gameObject.name == "Stone")
    {
        //Destroy(col.gameObject);
        col.rigidbody.AddForce(-transform.up*5, ForceMode.Acceleration);
        Debug.Log("bla bla");
    }
    
    }