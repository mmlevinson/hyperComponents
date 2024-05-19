
import { twMerge } from 'tailwind-merge';
import {tw as formStyles} from '../../testform.astro'
const apiRoute = 'https://my-json-server.typicode.com/mmlevinson/hyperComponents/users'

const tw = {...formStyles}

const updatedMarkup = (user) => {

 return  `
	 <!-- Name -->
	 <label class="${tw.label}" for="name">Name </label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="name" id="name" value="${user.name}" />
 
	 <!-- Email -->
	 <label class="${tw.label}" for="email">Email</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="email" name="email" id="email" value="${user.email}"  />
 
	 <!-- Password -->
	 <label class="${tw.label}" for="password" >Password</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="password" name="password" id="password" value="${user.password}" />
 
	 <!-- Age -->
	 <label class="${tw.label}" for="age">Age</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="number" name="age" id="age" value="${user.age}" />
 
	 <!-- Role -->
	 <label class="${tw.label}" for="role">Role</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="role" id="role" value="${user.role}" />
 
	 <!-- Gender -->
	 <label class="${tw.label}" for="gender">Gender</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="gender" id="gender" value="${user.gender}" />
 
	 <!-- Phone -->
	 <label class="${tw.label}" for="phone">Phone</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="phone" id="phone" value="${user.phone}" />
 
	 <!-- City -->	
	 <label class="${tw.label}" for="city">City</label>
		 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="city" id="city" value="${user.address.city}" />
 
	 <!-- State -->
	 <label class="${tw.label}" for="state">State</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="state" id="state" value="${user.address.state}" />
 
	 <!-- Address -->
	 <label class="${tw.label}" for="address">Address</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="address" id="address" value="${user.address.street}" />
 
 
	 <label class="${tw.label}" for="country">Country</label>
	 <span class="${tw.error}"></span>
	 <input class="${tw.input}" type="text" name="country" id="country" value="${user.address.country}" />
 
 
	 
	 <div class="${tw.buttonContainer}">
		 <button type="button" class="${twMerge(tw.baseButton, tw.delete)}">Delete</button>
		 <button type="reset" class="${twMerge(tw.baseButton, tw.reset)}">Reset</button>
		 <button type="submit" class="${twMerge(tw.baseButton, tw.submit)}">Submit</button>
	 </div>
 
 `
}

export const GET = async ({params, request}) => {

	// api request to get a single user from the jsonplaceholder database
	const user = await fetch(`${apiRoute}/${params.id}`).then(response => response.json())
	return new Response (updatedMarkup(user), {status: 200})
	
	
}




