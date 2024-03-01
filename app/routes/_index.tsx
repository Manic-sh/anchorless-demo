import {json, LoaderFunction} from "@remix-run/node";
import { Content, fetchOneEntry } from "@builder.io/sdk-react";
import {useLoaderData} from "@remix-run/react";


export const loader: LoaderFunction = async ({ params, request }) => {
  const page = await fetchOneEntry({
    model: 'page',
    query: {
      'name': 'Home',
    },
    options: {
      locale: 'Default',
      enrich: true
    },
    apiKey: '1961e426a4c24256b0bf32de6a12ec6e'
  });

  return json({page: page ?? undefined});
}

export default function Route() {
  const {page} = useLoaderData<{ page }>();

  return (
      <>
        <Content
            apiKey="1961e426a4c24256b0bf32de6a12ec6e"
            model="page"
            // @ts-ignore
            content={page}
        />
      </>
  )
}
