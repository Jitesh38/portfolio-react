import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite)
            .setProject(conf.project_id);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createTestimonial({ name, designation, testimonial, img_id,display=false }) {
        try {
            return await this.databases.createDocument(conf.database_id, conf.collection_id, ID.unique(), {
                name, designation, testimonial, img_id,display
            })
        } catch (error) {
            console.log('Appwrite :: createPost :: error :: ', error);
        }
    }


    async allTestimonial() {
        try {
            return await this.databases.listDocuments(conf.database_id, conf.collection_id)
        } catch (error) {
            console.log('AppWrite :: all post :: error :: ', error);
        }
    }


    //file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.bucket_id, ID.unique(), file)
        } catch (error) {
            console.log('appwrite :: upload file :: ', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.bucket_id, fileId)            
        } catch (error) {
            console.log('appwrite :: getfile :: ',error)
            return false
        }
    }
}

const service = new Service()

export default service
