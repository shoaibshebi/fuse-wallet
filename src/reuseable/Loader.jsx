import React from "react";

export default function Loader() {
  return (
    <div className="text-center h-auto flex flex-col justify-center ">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-6 bg-gray-700 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-6 bg-gray-700 rounded col-span-2"></div>
              <div class="h-6 bg-gray-700 rounded col-span-1"></div>
            </div>
            <div class="h-6 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
