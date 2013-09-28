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
    if(col.gameObject.name == "Cube")
    {
        Destroy(col.gameObject);
        //col.rigidbody.AddForce(-transform.forward*50);
        //Debug.Log("bla bla");
    }
    if(col.gameObject.name == "Player")
    {
        //Destroy(col.gameObject);
        col.rigidbody.AddForce(-transform.forward*50);
        Debug.Log("Player at wall");
    }
    }
