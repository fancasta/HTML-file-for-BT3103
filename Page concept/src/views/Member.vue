<template>
    <h1>Member Page</h1>
    <h2>List of Projects</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Project Leader</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Cena</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>John Mary</td>
                <td>mary@example.com</td>
            </tr>
            <tr>
                <td>John July</td>
                <td>july@example.com</td>
            </tr>
        </tbody>
    </table>
    <h2> Submit new Project</h2>
    <div class="container">
        <label for="project_name">Project name:</label>
        <input type="text" class="form-control" placeholder="Project name" id="project_name">
        <div class="form-group">
            <label for="comment">Description:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control" placeholder="Manager name">
            <input type="text" class="form-control" placeholder="Manager Email"> 
        </div>
        <button type="button" class="btn btn-primary">Submit new Project</button>
        <br><br><br>

        <h2>Notification</h2>
        <h2>New posts</h2>
        <div class="card p-3 m-2">
            <h5 class="card-title">2020 Annual Summary</h5>
            <h6 class="card-subtitle mb-2 text-muted">John Cena</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
        </div>
        <h2>Upcoming deadlines</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Assigned Work</th>
                    <th>Deadline</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Cena</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam dicta dolore. Dolorem quis qui repellendus, alias dicta unde incidunt placeat quia aut itaque architecto nam omnis ipsum repellat soluta.<br>
                    </td>
                    <td>21-12-2021 <br>
                    </td>
                </tr>
                <tr>
                    <td>John Cena</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam dicta dolore. Dolorem quis qui repellendus, alias dicta unde incidunt placeat quia aut itaque architecto nam omnis ipsum repellat soluta.<br>
                    </td>
                    <td>21-12-2021 <br>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Member"
}
</script>

<style>

</style>