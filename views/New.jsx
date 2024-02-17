const React = require('react');
const Default = require('./layouts/Default');

const New = ({ bakers }) => {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required />

                <label htmlFor='image'>Image</label>
                <input type='text' name='image' id='image' />

                <label>
                    <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked /> Has
                    Gluten?
                </label>

                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker' required>
                    <option value=''>-- Choose a baker --</option>
                    {bakers.map((baker) => {
                        return (
                            <option key={baker.id} value={baker.id}>
                                {baker.name}
                            </option>
                        );
                    })}
                </select>

                <br />
                <input type='submit' value='Create Bread' />
            </form>
            <div className='backButton'>
                <a href='/breads'>
                    <button>Go back to the index</button>
                </a>
            </div>
        </Default>
    );
};

module.exports = New;
