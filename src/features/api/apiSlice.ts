import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface DogBreed {
	id: string,
	name: string,
	image: {
			url: string
	}
}

const DOGS_API_KEY = "4d15a4f8-34a6-4105-8660-2f2648d9722b"

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.thedogapi.com/v1',
		prepareHeaders(headers){
			headers.set('x-api-key', DOGS_API_KEY)
			return headers
		}
	}),
	endpoints(builder){
		return {
			fetchDogBreeds: builder.query<DogBreed[], number | void>({
				query(limit = 10) {
					return `/breeds?limit=${limit}`
				}
			})
		}
	}
})

export const { useFetchDogBreedsQuery } = apiSlice;
