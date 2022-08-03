import React from "react";

const GenderFilter = ({ setGenderFilter }) => {
  return (
    <div className="flex gap-4">
      <div class="form-control" onClick={() => setGenderFilter("all")}>
        <label class="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            class="radio checked:bg-primary"
            checked
          />
          <span class="label-text"> All</span>
        </label>
      </div>

      <div class="form-control" onClick={() => setGenderFilter("male")}>
        <label class="label cursor-pointer">
          <input type="radio" name="radio-6" class="radio checked:bg-primary" />

          <span class="label-text"> Male</span>
        </label>
      </div>

      <div class="form-control" onClick={() => setGenderFilter("female")}>
        <label class="label cursor-pointer">
          <input type="radio" name="radio-6" class="radio checked:bg-primary" />

          <span class="label-text"> Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderFilter;
