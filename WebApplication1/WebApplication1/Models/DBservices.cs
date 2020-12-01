using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.Text;
using WebApplication1.Models;

/// <summary>
/// DBServices is a class created by me to provides some DataBase Services
/// </summary>
public class DBservices
{
    public SqlDataAdapter da;
    public DataTable dt;

    public DBservices()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    //--------------------------------------------------------------------------------------------------
    // This method creates a connection to the database according to the connectionString name in the web.config 
    //--------------------------------------------------------------------------------------------------
    public SqlConnection connect(String conString)
    {

        // read the connection string from the configuration file
        string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
        SqlConnection con = new SqlConnection(cStr);
        con.Open();
        return con;
    }

    //--------------------------------------------------------------------------------------------------
    // This method inserts a car to the cars table 
    //--------------------------------------------------------------------------------------------------
    public int insert(Ingredient i)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("DBConnectionString"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        String cStr = BuildInsertCommand(i);      // helper method to build the insert string

        cmd = CreateCommand(cStr, con);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            return 0;
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }


    public List<Ingredient> getIngredient()
    {
        SqlConnection con = null;

        try
        {

            con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

            String selectSTR = "select * from ingredients";
            SqlCommand cmd = new SqlCommand(selectSTR, con);

            // get a reader
            SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
            List<Ingredient> list = new List<Ingredient>();
            while (dr.Read())
            {   // Read till the end of the data into a row
                Ingredient ing = new Ingredient();
                ing.Id = (int)dr["id"];
                ing.Name = (string)dr["name"];
                ing.Image = (string)dr["image"];
                ing.Calories = (int)dr["calories"];
                list.Add(ing);

            }

            return list;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }
        finally
        {
            if (con != null)
            {
                con.Close();
            }

        }




        
    }


    public inr insert(DishRecipe dish)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("DBConnectionString"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        String cStr = BuildInsertCommand(dish);      // add tour ang getId of tour

        cmd = CreateCommand(cStr, con);             // create the command

        try
        {
            Int32 recipeId = Convert.ToInt32(cmd.ExecuteScalar()); // execute the command


            for (int i = 0; i < dish.Ingredients.Count; i++)
            {
                try
                {
                    cStr = BuildInsertCommand(recipeId, dish.Ingredients[i].Id );
                    cmd = CreateCommand(cStr, con);             // create the command
                    cmd.ExecuteNonQuery(); // execute the command

                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }



        }
        catch (Exception ex)
        {

            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    //--------------------------------------------------------------------
    // Build the Insert command String
    //--------------------------------------------------------------------

    private String BuildInsertCommand(int recipeId, int ingredientId)
    {
        String command;

        StringBuilder sb = new StringBuilder();
        //use a string builder to create the dynamic string
        sb.AppendFormat("Values('{0}', '{1}')", recipeId, ingredientId);
        String prefix = "INSERT INTO ingredientsInRecipes " + "(recipeId, ingredientId) ";
        command = prefix + sb.ToString();
        return command;
    }

    private String BuildInsertCommand(DishRecipe dish)
    {
        String command;

        StringBuilder sb = new StringBuilder();
        //use a string builder to create the dynamic string
        sb.AppendFormat("Values('{0}', '{1}', '{2}','{3}')", dish.Name, dish.Image, dish.CookingMethod, dish.Time);
        String prefix = "INSERT INTO recipes " + "(name,image,cookingMethod,time) ";
        command = prefix + sb.ToString();
        command += "SELECT SCOPE_IDENTITY()";
        return command;
    }

    private String BuildInsertCommand(Ingredient i)
    {
        String command;

        StringBuilder sb = new StringBuilder();
        // use a string builder to create the dynamic string
        sb.AppendFormat("Values('{0}', '{1}' ,'{2}')",  i.Name ,i.Image, i.Calories.ToString());
        String prefix = "INSERT INTO ingredients " + "(name, image, calories) ";
        command = prefix + sb.ToString();

        return command;
    }
    //---------------------------------------------------------------------------------
    // Create the SqlCommand
    //---------------------------------------------------------------------------------
    private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

        return cmd;
    }


    

}
