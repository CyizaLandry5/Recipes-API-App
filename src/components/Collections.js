import React from "react";
import ParsedHTMLComponent from "./ParsedHTMLComponent";

function Collections({ data }) {
  return (
    <div>
      {data.length > 0 ? (
        data.map((collection, index) => (
          <div key={index}>
            <h1 className="text-2xl font-semibold text-orange-500 my-5">
              {collection.name}
            </h1>
            <div className="my-3 flex flex-col gap-4">
              {collection.results.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 border shadow-sm rounded-md"
                >
                  <div>
                    <img src={item.image} alt="" className="max-w-none" />
                  </div>
                  <div className="p-3">
                    <h1
                      onClick={() => {
                        window.location.href = item.link;
                      }}
                      className="font-semibold text-orange-500 text-xl cursor-pointer"
                    >
                      {item.name}
                    </h1>
                    <p className="mt-2">
                      {typeof item.content === "string" && (
                        <ParsedHTMLComponent htmlString={item.content} />
                      )}
                    </p>
                    <p>
                      <button
                        onClick={() => {
                          window.location.href = item.link;
                        }}
                        className="bg-orange-700 px-4 py-1 text-white rounded mt-3"
                      >
                        More...
                      </button>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <h1>Please wait...</h1>
      )}
    </div>
  );
}

export default Collections;
