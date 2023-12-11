import React from 'react'
import './App.css';


export default function App() {
  return (
    <div>
      <center><h3>BIO-DATA</h3></center>
      <form>
        <br></br>
        <table>
          <tr>
            <td class="r1">NAME:</td>
            <td class="r2"><input type="textbox" placeholder='Enter Your Name'></input></td>
          </tr>

          <tr>
            <td class="r1">REG NO:</td>
            <td class="r2"> <input type="textbox" placeholder='Enter Your Reg No'></input></td>
          </tr>

          <tr>
            <td class="r1">DATE OF BIRTH:</td>
            <td class="r2"> <input type="date" ></input></td>
          </tr>

          <tr>
            <td class="r1">EMAIL:</td>
            <td class="r2"> <input type="email" placeholder='Enter Your Email' ></input></td>
          </tr>

          <tr>
            <td class="r1">MOBILE NUMBER:</td>
            <td class="r2"> <input type="number" placeholder='Enter Your MobileNo' ></input></td>
          </tr>

          <tr>
            <td class="r1">GENDER:</td>
            <td class="r2"> 
            <input type="radio" id="Male" name="GENDER"value="Male" ></input>MALE
            <input type="radio" id="Female" name="GENDER" value="Female"></input>FEMALE
            </td>
          </tr>

          <tr>
            <td class="r1">HOBBIES:</td>
            <td class="r2"> 
            <input type="checkbox" id="Draw" name="HOBBIES"value="Drawing" ></input>DRAWING<br></br>
            <input type="checkbox" id="Sing" name="HOBBIES"value="Singing" ></input> SINGING<br></br>
            <input type="checkbox" id="Dance" name="HOBBIES"value="Dancing" ></input>DANCING
            </td>
          </tr>

          <tr>
            <td class="r1">COUNTRY:</td>
            <td class="r2"> 
            <select id="country" name="country">
              <option value="India">INDIA</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="Russia">RUSSIA</option>
            </select>
            </td>
          </tr>

          <tr>
            <td class="r1">COMMENTS:</td>
            <td class="r2"><textarea></textarea>
            </td>
          </tr>

        </table>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}



