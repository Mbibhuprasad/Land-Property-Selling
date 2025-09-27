import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Home,
  Users,
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Menu,
  X,
  MapPin,
  Ruler,
  DollarSign,
  Compass,
  Shield,
  FileText,
  Check,
  Mail,
  User,
  Calendar,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { BackenUrl } from "../utils/constant";
import { AuthContext } from "../context/AuthContext";
import { PropertyContext } from "../context/PropertyContext";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { properties, deleteProperty, updateProperty, users } =
    useContext(PropertyContext);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      window.location.href = "/admin/login";
      return;
    }

    const parsedUser = JSON.parse(savedUser);
    if (!parsedUser.role || parsedUser.role !== "admin") {
      // Not an admin
      window.location.href = "/admin/login";
    }
  }, []);

  // View property details
  const viewProperty = (property) => {
    setSelectedProperty(property);
    setShowViewDialog(true);
  };

  // Edit property
  const editProperty = (property) => {
    setSelectedProperty(property);
    setShowEditDialog(true);
  };

  // View user details
  const viewUser = (user) => {
    setSelectedUser(user);
    setShowUserDialog(true);
  };

  // Delete property
  const deletePropertyHandle = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      await deleteProperty(id);
      alert("Property deleted successfully!");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // setUsers(users.filter(user => user._id !== id));
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/admin/login";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed md:relative z-50 w-64 bg-blue-800 text-white h-full shadow-lg"
            >
              <div className="p-5 border-b border-blue-700 flex justify-between items-center">
                <h1 className="text-xl font-bold flex items-center">
                  <LayoutDashboard className="mr-2" />
                  Admin Dashboard
                </h1>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        setActiveTab("properties");
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "properties"
                          ? "bg-blue-700 text-white"
                          : "text-blue-100 hover:bg-blue-700"
                      }`}
                    >
                      <Home className="mr-3 h-5 w-5" />
                      Properties
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setActiveTab("users");
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                        activeTab === "users"
                          ? "bg-blue-700 text-white"
                          : "text-blue-100 hover:bg-blue-700"
                      }`}
                    >
                      <Users className="mr-3 h-5 w-5" />
                      Users
                    </button>
                  </li>
                  <li className="mt-8">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-700 transition-colors"
                    >
                      <LogOut className="mr-3 h-5 w-5" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (always visible) */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="w-64 bg-blue-800 text-white h-full shadow-lg">
          <div className="p-5 border-b border-blue-700">
            <h1 className="text-xl font-bold flex items-center">
              <LayoutDashboard className="mr-2" />
              Admin Dashboard
            </h1>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("properties")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "properties"
                      ? "bg-blue-700 text-white"
                      : "text-blue-100 hover:bg-blue-700"
                  }`}
                >
                  <Home className="mr-3 h-5 w-5" />
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("users")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "users"
                      ? "bg-blue-700 text-white"
                      : "text-blue-100 hover:bg-blue-700"
                  }`}
                >
                  <Users className="mr-3 h-5 w-5" />
                  Users
                </button>
              </li>
              <li className="mt-8">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-700 transition-colors"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="md:hidden"></div> {/* Spacer for mobile */}
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === "properties"
                ? "Property Management"
                : "User Management"}
            </h2>
            <div className="w-10"></div> {/* Spacer for alignment */}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "properties" ? (
            <PropertiesTab
              properties={properties}
              onView={viewProperty}
              onEdit={editProperty}
              onDelete={deletePropertyHandle}
              showAddProperty={showAddProperty}
              setShowAddProperty={setShowAddProperty}
            />
          ) : (
            <UsersTab users={users} onView={viewUser} onDelete={deleteUser} />
          )}
        </main>
      </div>

      {/* Add Property Modal */}
      {showAddProperty && (
        <AddPropertyForm
          onClose={() => setShowAddProperty(false)}
          onSuccess={() => {
            setShowAddProperty(false);
            // In a real app, you would refresh the properties list here
          }}
        />
      )}

      {/* View Property Dialog */}
      {showViewDialog && selectedProperty && (
        <ViewPropertyDialog
          property={selectedProperty}
          onClose={() => setShowViewDialog(false)}
        />
      )}

      {/* Edit Property Dialog */}
      {showEditDialog && selectedProperty && (
        <EditPropertyDialog
          property={selectedProperty}
          onClose={() => setShowEditDialog(false)}
          onSuccess={() => {
            setShowEditDialog(false);
            // Refresh properties or update state
          }}
          updateProperty={updateProperty}
        />
      )}

      {/* View User Dialog */}
      {showUserDialog && selectedUser && (
        <ViewUserDialog
          user={selectedUser}
          onClose={() => setShowUserDialog(false)}
        />
      )}
    </div>
  );
};

// Properties Tab Component
const PropertiesTab = ({
  properties,
  onView,
  onEdit,
  onDelete,
  showAddProperty,
  setShowAddProperty,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">All Properties</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddProperty(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Property
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            onView={onView}
            onEdit={onEdit}
            property={property}
            onDelete={onDelete}
          />
        ))}
      </div>

      {properties.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Home className="h-16 w-16 mx-auto text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            No properties found
          </h3>
          <p className="text-gray-500">
            Get started by adding your first property
          </p>
        </div>
      )}
    </div>
  );
};

// Property Card Component
const PropertyCard = ({ property, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 overflow-hidden">
        {property.image && property?.image?.length > 0 ? (
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Home className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-800 truncate">
          {property.name}
        </h4>
        <p className="text-gray-600 text-sm mt-1">{property.location}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold">
            ₹{property.price?.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm">
            {property.squareFeet} sqft
          </span>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => onView(property)}
            className="text-blue-600 hover:text-blue-800 p-2"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={() => onEdit(property)}
            className="text-green-600 hover:text-green-800 p-2"
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(property.id)}
            className="text-red-600 hover:text-red-800 p-2"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// View Property Dialog Component
const ViewPropertyDialog = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Property Details
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Property Image */}
          <div className="h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
            {property.image && property?.image?.length > 0 ? (
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <Home className="h-16 w-16 text-gray-400" />
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {property.name}
                </h4>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin size={16} className="mr-2" />
                  {property.location}
                </p>
              </div>

              <div className="flex items-center text-gray-700">
                <DollarSign size={18} className="mr-2" />
                <span className="font-semibold">Price:</span>
                <span className="ml-2">
                  ₹{property.price?.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <Ruler size={18} className="mr-2" />
                <span className="font-semibold">Area:</span>
                <span className="ml-2">{property.squareFeet} sqft</span>
              </div>

              {property.facing && (
                <div className="flex items-center text-gray-700">
                  <Compass size={18} className="mr-2" />
                  <span className="font-semibold">Facing:</span>
                  <span className="ml-2">{property.facing}</span>
                </div>
              )}

              {property.boundary && (
                <div className="flex items-center text-gray-700">
                  <Shield size={18} className="mr-2" />
                  <span className="font-semibold">Boundary:</span>
                  <span className="ml-2">{property.boundary}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {property.address && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Address</h5>
                  <p className="text-gray-600">{property.address}</p>
                </div>
              )}

              {property.description && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">
                    Description
                  </h5>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              )}

              {property.amenities && property.amenities.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">
                    Amenities
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Edit Property Dialog Component
const EditPropertyDialog = ({
  property,
  onClose,
  onSuccess,
  updateProperty,
}) => {
  const [formData, setFormData] = useState({
    name: property.name || "",
    address: property.address || "",
    squareFeet: property.squareFeet || "",
    location: property.location || "",
    price: property.price || "",
    facing: property.facing || "",
    boundary: property.boundary || "",
    description: property.description || "",
    amenities: Array.isArray(property.amenities)
      ? property.amenities.join(", ")
      : "",
  });
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get the token from localStorage or AuthContext
      const token = localStorage.getItem("token") || (user && user.token);

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      // Prepare amenities array
      const amenitiesArray = formData.amenities
        ? formData.amenities
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item)
        : [];

      const updateData = {
        ...formData,
        amenities: amenitiesArray,
        squareFeet: Number(formData.squareFeet),
        price: Number(formData.price),
      };

      await updateProperty(property.id, updateData);
      onSuccess();
      alert("Property updated successfully!");
    } catch (error) {
      console.error("Error updating property:", error);
      alert(`Failed to update property: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Edit Property</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Square Feet
              </label>
              <input
                type="number"
                name="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facing Direction
              </label>
              <input
                type="text"
                name="facing"
                value={formData.facing}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Boundary Type
              </label>
              <input
                type="text"
                name="boundary"
                value={formData.boundary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amenities (comma separated)
              </label>
              <input
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Check size={18} className="mr-2" />
                  Update Property
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Users Tab Component
const UsersTab = ({ users, onView, onDelete }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">All Users</h3>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onView(user)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users?.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 mx-auto text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              No users found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

// View User Dialog Component
const ViewUserDialog = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-screen overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">User Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* User Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={48} className="text-blue-600" />
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <User size={18} className="mr-3 text-gray-500" />
              <div>
                <div className="font-semibold">Name</div>
                <div>{user.name}</div>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <Mail size={18} className="mr-3 text-gray-500" />
              <div>
                <div className="font-semibold">Email</div>
                <div>{user.email}</div>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <ShieldCheck size={18} className="mr-3 text-gray-500" />
              <div>
                <div className="font-semibold">Role</div>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <Calendar size={18} className="mr-3 text-gray-500" />
              <div>
                <div className="font-semibold">Joined Date</div>
                <div>
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <Calendar size={18} className="mr-3 text-gray-500" />
              <div>
                <div className="font-semibold">Member For</div>
                <div>{calculateTimeSince(user.createdAt)}</div>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-center text-gray-700">
                <Phone size={18} className="mr-3 text-gray-500" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>{user.phone}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Helper function to calculate time since joining
const calculateTimeSince = (dateString) => {
  const joinDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - joinDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else {
    const years = Math.floor(diffDays / 365);
    const remainingMonths = Math.floor((diffDays % 365) / 30);
    return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths !== 1 ? "s" : ""
    }`;
  }
};

// Add Property Form Component
const AddPropertyForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    squareFeet: "",
    location: "",
    price: "",
    facing: "",
    boundary: "",
    description: "",
    amenities: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get the token from localStorage or AuthContext
      const token = localStorage.getItem("token") || (user && user.token);

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const formDataToSend = new FormData();

      // Append form data
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append images
      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await fetch(`${BackenUrl}/admin/plots`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type header when sending FormData
          // The browser will set it automatically with the correct boundary
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
      }

      const data = await response.json();
      onSuccess();
      alert("Property added successfully!");
    } catch (error) {
      console.error("Error adding property:", error);
      alert(`Failed to add property: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">
            Add New Property
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Square Feet
              </label>
              <input
                type="number"
                name="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facing Direction
              </label>
              <input
                type="text"
                name="facing"
                value={formData.facing}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Boundary Type
              </label>
              <input
                type="text"
                name="boundary"
                value={formData.boundary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amenities (comma separated)
              </label>
              <input
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              {images.length} file(s) selected
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Property"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
