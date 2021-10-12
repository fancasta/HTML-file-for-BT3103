<template>
    <h1>Manager Page</h1>
    <h2>List of Projects</h2>
    <div class="container">
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
    <br>
    <h2>Notification</h2>
    <br>
    <h5>New report from Project Leader</h5>
    <div class="card p-3 m-2">
        <h5 class="card-title">2020 Annual Report</h5>
        <h6 class="card-subtitle mb-2 text-muted">An Khanh </h6>
        <p class="card-text">Everything is on schedule</p>
    </div>
    <br><br>
    <h5>Upcoming deadlines</h5>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Deadline</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2020 Annual Report</td>
                <td>21-12-2021 <br>
                </td>
            </tr>
            <tr>
                <td>Testing of new product</td>
                <td>30-12-2021 <br>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <h2> Create new Project</h2>
    <div class="container">
        <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
            <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
            Project type
            </button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
            </div>
        </div>
        <input type="text" class="form-control" placeholder="Project name">
        </div>
        <div class="form-group">
            <label for="comment">Description:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control" placeholder="Project leader name">
            <input type="text" class="form-control" placeholder="Project leader email"> 
        </div>
        <div class="checkbox">
            <label><input type="checkbox" value=""> Is this an individual project?</label>
        </div>
        <br>
        <button type="button" class="btn btn-primary">Assign project</button>
        <br><br><br>
    </div>
</template>

<script>
export default {
    name: "Manager"
}
</script>

<style>

</style>